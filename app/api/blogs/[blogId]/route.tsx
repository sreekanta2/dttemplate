import { NextRequest, NextResponse } from "next/server";
import { blogsData } from "../data";
export const dynamic = "force-dynamic"
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const searchParams = request.nextUrl.searchParams; 
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "5", 10);
   
    // Find blog by ID
    const blog = blogsData.find((b) => b.id === 1);
    if (!blog) {
      return NextResponse.json(
        { status: "fail", message: "Blog not found" },
        { status: 404 }
      );
    }

    // Paginate comments
    const totalComments = blog.comments.length;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedComments = blog.comments.slice(startIndex, endIndex);

    return NextResponse.json({
      status: "success",
      message: "Blog fetched successfully",
      data: {
        id: blog.id,
        title: blog.title,
        content: blog.content,
        publishedAt: blog.publishedAt,
        image: blog.image,
        author: blog.author,
        comments: paginatedComments,
      },
      pagination: {
        totalRecords: totalComments,
        totalPages: Math.ceil(totalComments / limit),
        currentPage: page,
        perPage: limit,
        hasNextPage: endIndex < totalComments,
        hasPrevPage: startIndex > 0,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { status: "fail", message: "Something went wrong" },
      { status: 500 }
    );
  }
}
