import { Notes, columns } from "./columns";
import { DataTable } from "@/components/data-table";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

async function getData(): Promise<Notes[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      description:
        "Something something Something something Something something Something something Something something",
      status: "Completed",
    },
    {
      id: "728ed52f",
      description: "Something something Something something",
      status: "Completed",
    },
  ];
}

export default async function Home() {
  const data = await getData();
  return (
    <div className="grid grid-cols-1 gap-y-8 border-gray-200 py-2">
      <div className="flex flex-col items-start ml-2 mt-1 border-b border-gray-300">
        <span className="font-medium text-gray-600">Input New Task</span>
        <div className="flex mt-2 mb-3 w-full max-w-sm items-center space-x-2">
          <Input type='text' placeholder="Add Task" />
          <Button type="submit">Add</Button>
        </div>
      </div>
      <div className="flex w-full h-full items-center justify-around">
        <div>
          <div className="flex mx-auto mt-1 flex-col justify-center items-center">
            <div>
              <p className="font-medium text-gray-600">Completed</p>
            </div>
            <div className="mt-2">
              <DataTable columns={columns} data={data} />
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center">
            <div>
              <p className="font-medium text-gray-600">Ongoing</p>
            </div>
            <div className="mt-2">
              <DataTable columns={columns} data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
