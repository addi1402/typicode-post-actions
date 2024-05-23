import { LuFlag } from "react-icons/lu";
import { Button, Avatar } from "@chakra-ui/react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white flex justify-between items-center px-14 py-4">
      <Link href="/" className="flex items-center gap-2">
        <LuFlag className="text-2xl" />
        <h2 className="text-lg">Typicode Actions</h2>
      </Link>

      <div className="flex items-center gap-2">
        <Link href="/form/">
          <Button
            size="sm"
            className="mr-2"
            bg="#1f2937"
            color="white"
            _hover={{ bg: "#334155" }}
          >
            Add Post
          </Button>
        </Link>
        <Avatar
          name="Oshigaki Kisame"
          src="https://bit.ly/broken-link"
          size="sm"
          _hover={{ bg: "#374151", color: "white" }}
          cursor="pointer"
        />
      </div>
    </header>
  );
}
