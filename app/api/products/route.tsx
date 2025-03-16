import { NextRequest, NextResponse } from "next/server";
import { productData } from "./data";
export const dynamic = "force-dynamic"
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams; 
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "5", 10);

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const paginatedData = productData.slice(startIndex, endIndex);
    const totalRecords = productData.length;
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
    console.error(error);
    return NextResponse.json(
      {
        status: "fail",
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}
