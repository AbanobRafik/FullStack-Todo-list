import { CheckCircle } from "lucide-react";
import useCustomeQuery from "../components/hooks/useCustomeQuery";
import TodoSkeleton from "../components/TodoSkeleton";
import { userData } from "../UserData";
import Button from "../components/ui/Button";
import { NoTodos } from "../components/NoTodos";
import { faker } from "@faker-js/faker";
import axiosInstance from "../config/axios.config";
import { ChangeEvent, useState } from "react";
import Paginator from "../components/ui/Paginator";

const TodosPage = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("DESC");

  const { data, isLoading, refetch, isFetching } = useCustomeQuery({
    queryKey: [`PaginatedTodos-${page}`, `${pageSize}`, `${sortBy}`],
    apiUrl: `/todos?pagination[pageSize]=${pageSize}&pagination[page]=1&sort=createdAt:${sortBy}`,
    config: {
      headers: {
        Authorization: `Bearer ${userData.jwt}`,
      },
    },
  });

  console.log(data);

  if (isLoading)
    return (
      <div>
        {Array.from({ length: 3 }, (_, idx) => (
          <TodoSkeleton key={idx} />
        ))}
      </div>
    );

  const onCLickPrev = () => {
    setPage((prev) => prev - 1);
  };
  const onCLickNext = () => {
    setPage((next) => next + 1);
  };

  const onGenerateTodos = async () => {
    setIsUpdating(true);
    for (let i = 0; i < 20; i++) {
      try {
        const { data } = await axiosInstance.post(
          "/todos",
          {
            data: {
              title: faker.word.words(3),
              description: faker.lorem.paragraph(2),
              user: [userData.user.id],
            },
          },
          {
            headers: {
              Authorization: `Bearer ${userData.jwt}`,
            },
          }
        );
        refetch();
        console.log(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsUpdating(false);
      }
    }
  };

  const onChangePageSize = (e: ChangeEvent<HTMLSelectElement>) => {
    setPageSize(Number(e.target.value));
  };

  const onChangeSortBy = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="space-y-5 p-8">
      <div className="flex justify-center items-center w-full">
        <Button
          width="w-fit"
          isLoading={isUpdating}
          className="bg-slate-100 border-2 border-sky-600 text-slate-800 font-semibold hover:bg-sky-600 hover:text-white duration-300 ease-out"
          onClick={onGenerateTodos}
        >
          Generate ToDos
        </Button>
      </div>
      <div className="flex items-center justify-between space-x-2 text-md">
        <select
          className="border-2 border-indigo-600 rounded-md p-2"
          value={sortBy}
          onChange={onChangeSortBy}
        >
          <option disabled>Sort by</option>
          <option value="ASC">Oldest</option>
          <option value="DESC">Latest</option>
        </select>
        <select
          className="border-2 border-indigo-600 rounded-md p-2"
          value={pageSize}
          onChange={onChangePageSize}
        >
          <option disabled>Page Size</option>
          <option value={10}>10</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
      {data.data.length ? (
        data.data.map(
          ({ title, id }: { id: number; title: string }, idx: number) => (
            <div
              key={id}
              className="bg-gray-100 shadow-md rounded-lg overflow-hidden"
            >
              <div className="md:p-6 p-2 flex items-center justify-between hover:bg-gray-200 transition-colors duration-200">
                <div className="flex items-center space-x-2 md:space-x-4">
                  <CheckCircle className="text-green-500 md:h-6 md:w-6 h-5 w-5" />
                  <p className="md:text-lg text-sm font-semibold text-gray-800">
                    {idx + 1}- {title}
                  </p>
                </div>
                <div className="flex items-center space-x-1 md:space-x-3"></div>
              </div>
            </div>
          )
        )
      ) : (
        <NoTodos
          boldMsg="No Todos"
          msg="You haven't added any todos yet. Start by adding a new task!"
        />
      )}
      <Paginator
        isLoading={isLoading || isFetching}
        page={page}
        onClickNext={onCLickNext}
        onClickPrev={onCLickPrev}
        pageCount={data.meta.pagination.pageCount}
        total={data.meta.pagination.total}
      />
    </div>
  );
};

export default TodosPage;
