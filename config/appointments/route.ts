import { NextResponse } from "next/server";
import { appointments } from "./data";

export const dynamic = "force-dynamic"; // Ensure the route is dynamic

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // Parse query parameters
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "5", 10);
    const completed = searchParams.get("completed");
    let filteredData;

    if (completed === "true") {
      filteredData = appointments.filter(
        (appointment) => appointment.isComplate === true
      );
    } else if (completed === "false") {
      filteredData = appointments.filter(
        (appointment) => appointment.isComplate === false
      );
    } else filteredData = appointments;

    // Calculate start and end indices for pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    // Slice the filtered data for pagination
    const paginatedData = filteredData.slice(startIndex, endIndex);

    // Calculate pagination metadata
    const totalRecords = filteredData.length; // Use filteredData length for accurate pagination
    const totalPages = Math.ceil(totalRecords / limit);
    // console.log({ filteredData });

    return NextResponse.json({
      status: "success",
      message: "Successfully fetched data",
      data: paginatedData,
      pagination: {
        totalRecords,
        totalPages,
        currentPage: page,
        perPage: limit,
        hasNextPage: endIndex < totalRecords,
        hasPrevPage: startIndex > 0,
      },
    });
  } catch (error) {
    // Debugging: Log errors
    console.error("Error:", error);

    return NextResponse.json(
      {
        status: "fail",
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}
