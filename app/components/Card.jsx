import { useRouter } from "next/navigation";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { LuDelete, LuEye, LuTrash2 } from "react-icons/lu";

export default function PostCard({ post }) {
  const { id, userId, title, body, user } = post;
  let router = useRouter();

  function handleClick() {
    router.push(`/individual/${id}/`);
  }

  return (
    <Card variant="outline">
      <CardHeader className="flex gap-4 items-center">
        <Avatar name={user?.name} src="https://bit.ly/broken-link" size="md" bg='#f4f4f5' color='black'/>
        <div>
          <h5 className="text-lg font-semibold">{user?.name}</h5>
          <p className="text-gray-500">{user?.email}</p>
        </div>
      </CardHeader>
      <CardBody>
        <h3 className="font-semibold text-lg capitalize mb-2">{title}</h3>
        <p className="text-gray-500">{body}</p>
      </CardBody>

      <CardFooter className="flex justify-end">
        <Button
          leftIcon={<LuDelete />}
          size="sm"
          className="mr-2"
          variant="outline"
          _hover={{ bg: "#f4f4f5" }}
        >
          Edit
        </Button>
        <Button
          leftIcon={<LuTrash2 />}
          variant="outline"
          size="sm"
          className="mr-2"
          _hover={{ bg: "#f4f4f5" }}
        >
          Delete
        </Button>
        <Button
          leftIcon={<LuEye />}
          size="sm"
          className="mr-2"
          bg="#1f2937"
          color="white"
          _hover={{ bg: "#374151" }}
          onClick={handleClick}
        >
          View
        </Button>
      </CardFooter>
    </Card>
  );
}
