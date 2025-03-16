import { NextRequest, NextResponse } from "next/server";
import { invoices } from "./data";

export const dynamic = "force-dynamic";
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const paginatedData = invoices.slice(startIndex, endIndex);
    const totalRecords = invoices.length;
    const totalPages = Math.ceil(totalRecords / limit);

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
    return NextResponse.json(
      {
        status: "fail",
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}
