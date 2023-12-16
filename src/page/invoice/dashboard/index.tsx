"use client";

import React from "react";
import { SelectValue, SelectTrigger, Select } from "@/components/ui/select";
import { CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import {
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { ResponsivePie } from "@nivo/pie";
import Link from "next/link";
import Layout from "./Layout";

export default function InvoiceDashboard() {
  return (
    <div className="bg-white">
   
      <Layout>
        <div className="flex-grow  p-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl">Invoice Dashboard</h1>
            <Link href="/invoice/generate" className="px-2 py-1 bg-gray-800 text-white rounded-lg flex items-center space-x-2 text-sm">
                Create Invoice
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 cards">
            <Card className="w-full bg-red-200">
              <CardContent>
                <FilesIcon className="text-gray-600 mb-2 mt-2" />
                <p className="text-sm">Total Expenses</p>
                <p className="text-2xl font-semibold">5,320</p>
              </CardContent>
            </Card>
            <Card className="w-full bg-blue-200">
              <CardContent>
                <PaperclipIcon className="text-gray-600 mb-2 mt-2" />
                <p className="text-sm">Privileged Documents</p>
                <p className="text-2xl font-semibold">2,234</p>
              </CardContent>
            </Card>
            <Card className="w-full bg-green-200">
              <CardContent>
                <TextIcon className="text-gray-600 mb-2 mt-2" />
                <p className="text-sm">Responsive Documents</p>
                <p className="text-2xl font-semibold">1,862</p>
              </CardContent>
            </Card>
            <Card className="w-full bg-blue-200">
              <CardContent>
                <StarIcon className="text-gray-600 mb-2 mt-2" />
                <p className="text-sm">Starred Documents</p>
                <p className="text-2xl font-semibold">109</p>
              </CardContent>
            </Card>
            <Card className="w-full bg-green-200">
              <CardContent>
                <TypeIcon className="text-gray-600 mb-2 mt-2" />
                <p className="text-sm">Summaries Generated</p>
                <p className="text-2xl font-semibold">4,783</p>
              </CardContent>
            </Card>
            <Card className="w-full bg-red-200">
              <CardContent>
                <MailsIcon className="text-gray-600 mb-2 mt-2" />
                <p className="text-sm">Emails</p>
                <p className="text-2xl font-semibold">1,223</p>
              </CardContent>
            </Card>
          </div>
          <div className="overflow-x-scroll p-6 w-full table">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-lg font-medium">Transactions</h1>
              <Button
                className="px-2 py-1 bg-gray-800 text-white rounded-lg flex items-center space-x-2 text-sm"
                type="button"
              >
                <DownloadIcon className="w-4 h-4" />
                <span>Download</span>
              </Button>
            </div>
            <Table className="">
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead />
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Mar 12</TableCell>
                  <TableCell>WeWork</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 bg-red-200 text-red-800 rounded-md">
                      <TagIcon className="w-4 h-4 inline-block mr-1" />
                      Office
                    </span>
                  </TableCell>
                  <TableCell className="text-right">$175.00</TableCell>
                  <TableCell>
                    {/* <Popover>
                    <PopoverTrigger>
                      <button
                        className="px-2 py-1 bg-transparent text-black hover:bg-gray-200 active:bg-gray-300 rounded"
                        type="button"
                      >
                        <MoreVerticalIcon className="w-4 h-4" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-40">
                      <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                        <FileEditIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">Edit</span>
                      </button>
                      <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                        <ShareIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">Share</span>
                      </button>
                      <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                        <DeleteIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">Delete</span>
                      </button>
                    </PopoverContent>
                  </Popover> */}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Mar 13</TableCell>
                  <TableCell>IKEA</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded-md">
                      <TagIcon className="w-4 h-4 inline-block mr-1" />
                      Home
                    </span>
                  </TableCell>
                  <TableCell className="text-right">$450.00</TableCell>
                  <TableCell>
                    {/* <Popover>
                    <PopoverTrigger>
                      <button
                        className="px-2 py-1 bg-transparent text-black hover:bg-gray-200 active:bg-gray-300 rounded"
                        type="button"
                      >
                        <MoreVerticalIcon className="w-4 h-4" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-40">
                      <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                        <FileEditIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">Edit</span>
                      </button>
                      <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                        <ShareIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">Share</span>
                      </button>
                      <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                        <DeleteIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">Delete</span>
                      </button>
                    </PopoverContent>
                  </Popover> */}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Mar 14</TableCell>
                  <TableCell>Home Depot</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded-md">
                      <TagIcon className="w-4 h-4 inline-block mr-1" />
                      Home
                    </span>
                  </TableCell>
                  <TableCell className="text-right">$200.00</TableCell>
                  <TableCell>
                    {/* <Popover>
                    <PopoverTrigger>
                      <button
                        className="px-2 py-1 bg-transparent text-black hover:bg-gray-200 active:bg-gray-300 rounded"
                        type="button"
                      >
                        <MoreVerticalIcon className="w-4 h-4" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-40">
                      <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                        <FileEditIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">Edit</span>
                      </button>
                      <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                        <ShareIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">Share</span>
                      </button>
                      <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                        <DeleteIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">Delete</span>
                      </button>
                    </PopoverContent>
                  </Popover> */}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Mar 15</TableCell>
                  <TableCell>Burger King</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 bg-green-200 text-green-800 rounded-md">
                      <TagIcon className="w-4 h-4 inline-block mr-1" />
                      Food
                    </span>
                  </TableCell>
                  <TableCell className="text-right">$15.00</TableCell>
                  <TableCell>
                    {/* <Popover>
                    <PopoverTrigger>
                      <button
                        className="px-2 py-1 bg-transparent text-black hover:bg-gray-200 active:bg-gray-300 rounded"
                        type="button"
                      >
                        <MoreVerticalIcon className="w-4 h-4" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-40">
                      <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                        <FileEditIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">Edit</span>
                      </button>
                      <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                        <ShareIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">Share</span>
                      </button>
                      <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                        <DeleteIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">Delete</span>
                      </button>
                    </PopoverContent>
                  </Popover> */}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Mar 16</TableCell>
                  <TableCell>WeWork</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 bg-red-200 text-red-800 rounded-md">
                      <TagIcon className="w-4 h-4 inline-block mr-1" />
                      Office
                    </span>
                  </TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                  <TableCell>
                    {/* <Popover>
                    <PopoverTrigger>
                      <button
                        className="px-2 py-1 bg-transparent text-black hover:bg-gray-200 active:bg-gray-300 rounded"
                        type="button"
                      >
                        <MoreVerticalIcon className="w-4 h-4" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-40">
                      <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                        <FileEditIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">Edit</span>
                      </button>
                      <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                        <ShareIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">Share</span>
                      </button>
                      <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                        <DeleteIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">Delete</span>
                      </button>
                    </PopoverContent>
                  </Popover> */}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Mar 17</TableCell>
                  <TableCell>IKEA</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded-md">
                      <TagIcon className="w-4 h-4 inline-block mr-1" />
                      Home
                    </span>
                  </TableCell>
                  <TableCell className="text-right">$350.00</TableCell>
                  <TableCell>
                    {/* <Popover>
                    <PopoverTrigger>
                      <button
                        className="px-2 py-1 bg-transparent text-black hover:bg-gray-200 active:bg-gray-300 rounded"
                        type="button"
                      >
                        <MoreVerticalIcon className="w-4 h-4" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-40">
                      <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                        <FileEditIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">Edit</span>
                      </button>
                      <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                        <ShareIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">Share</span>
                      </button>
                      <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                        <DeleteIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">Delete</span>
                      </button>
                    </PopoverContent>
                  </Popover> */}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Mar 18</TableCell>
                  <TableCell>Home Depot</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded-md">
                      <TagIcon className="w-4 h-4 inline-block mr-1" />
                      Home
                    </span>
                  </TableCell>
                  <TableCell className="text-right">$100.00</TableCell>
                  <TableCell>
                    {/* <Popover>
                    <PopoverTrigger>
                      <button
                        className="px-2 py-1 bg-transparent text-black hover:bg-gray-200 active:bg-gray-300 rounded"
                        type="button"
                      >
                        <MoreVerticalIcon className="w-4 h-4" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-40">
                      <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                        <FileEditIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">Edit</span>
                      </button>
                      <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                        <ShareIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">Share</span>
                      </button>
                      <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                        <DeleteIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">Delete</span>
                      </button>
                    </PopoverContent>
                  </Popover> */}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Mar 19</TableCell>
                  <TableCell>Burger King</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 bg-green-200 text-green-800 rounded-md">
                      <TagIcon className="w-4 h-4 inline-block mr-1" />
                      Food
                    </span>
                  </TableCell>
                  <TableCell className="text-right">$20.00</TableCell>
                  <TableCell>
                    {/* <Popover>
                    <PopoverTrigger>
                      <button
                        className="px-2 py-1 bg-transparent text-black hover:bg-gray-200 active:bg-gray-300 rounded"
                        type="button"
                      >
                        <MoreVerticalIcon className="w-4 h-4" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-40">
                      <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                        <FileEditIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">Edit</span>
                      </button>
                      <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                        <ShareIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">Share</span>
                      </button>
                      <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                        <DeleteIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">Delete</span>
                      </button>
                    </PopoverContent>
                  </Popover> */}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export function DonutpieChart(
  props: React.JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLDivElement>
) {
  return (
    <div {...props}>
      <ResponsivePie
        data={[
          {
            id: "A",
            value: 434,
          },
          {
            id: "B",
            value: 456,
          },
          {
            id: "C",
            value: 150,
          },
          {
            id: "D",
            value: 258,
          },
          {
            id: "E",
            value: 511,
          },
        ]}
        sortByValue
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={1}
        cornerRadius={3}
        activeOuterRadiusOffset={2}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        enableArcLinkLabels={false}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        colors={{ scheme: "paired" }}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 50,
            itemHeight: 18,
            itemDirection: "left-to-right",
            symbolSize: 18,
            symbolShape: "circle",
          },
        ]}
        theme={{
          tooltip: {
            container: {
              fontSize: "12px",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

export function FilesIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" />
      <path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" />
      <path d="M15 2v5h5" />
    </svg>
  );
}

export function MailsIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="13" x="6" y="4" rx="2" />
      <path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7" />
      <path d="M2 8v11c0 1.1.9 2 2 2h14" />
    </svg>
  );
}

export function PaperclipIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  );
}

export function SignalIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      <path d="M12 20v-8" />
      <path d="M17 20V8" />
      <path d="M22 4v16" />
    </svg>
  );
}

export function StarIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export function TextIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 6.1H3" />
      <path d="M21 12.1H3" />
      <path d="M15.1 18H3" />
    </svg>
  );
}

export function TypeIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  );
}

export function DeleteIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <line x1="18" x2="12" y1="9" y2="15" />
      <line x1="12" x2="18" y1="9" y2="15" />
    </svg>
  );
}

export function DownloadIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

export function FileEditIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  );
}

export function HomeIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

export function MoreVerticalIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
    </svg>
  );
}

export function ShareIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}

export function TagIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
      <path d="M7 7h.01" />
    </svg>
  );
}

export function TicketIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
    </svg>
  );
}

export function UsersIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function WalletIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
    </svg>
  );
}
