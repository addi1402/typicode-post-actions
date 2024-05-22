"use client";
import { useSelector } from "react-redux";
import { Avatar } from "@chakra-ui/react";

export default function Page({ params }) {
  const id = Number(params.id);
  let posts = useSelector((store) => store.post.data);
  let users = useSelector((store) => store.user.data);

  let post = posts?.find((p) => id === p.id);
  let user = users?.find((u) => u.id == post.userId);

  return (
    <div className="px-60 py-5">
      {post && (
        <h1 className="capitalize font-bold text-4xl mt-6">{post.title}</h1>
      )}
      {user && (
        <p className="text-slate-600 mt-4">By {user.name} | May 20, 2022</p>
      )}

      <div className="flex gap-16 mt-14">
        <Avatar
          size="2xl"
          name={user && user.name}
          src="https://bit.ly/broken-link"
        />
        <div>
          <h3 className="font-bold text-lg mb-2">About Author</h3>
          <p>
            <strong>Name:</strong> {user?.name}
          </p>
          <p>
            <strong>Address:</strong> {user?.address.street},
            {user?.address.suite},{user?.address.city},{user?.address.zipcode}
          </p>
          <p>
            <strong>Phone: </strong> {user?.phone}
          </p>
          <p>
            <strong>Website:</strong> {user?.website}
          </p>
        </div>
      </div>

      <div className="my-8 w-3/5 text-slate-600 flex flex-col gap-y-6">
        <p className="font-semibold capitalize">{post?.body}</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
          inventore accusamus facere omnis suscipit, ipsa ipsum molestias fuga
          commodi dolore reiciendis maxime quisquam aliquid qui culpa quas in
          eligendi laborum!
        </p>

        <p>
          Saepe fugit in odit enim reiciendis, ea, nobis at eius blanditiis,
          molestiae omnis rem illo minima sit repudiandae reprehenderit numquam
          exercitationem nemo assumenda dolorem. Hic aspernatur officia
          doloremque dolor enim? Dolorem cum facilis similique laborum possimus
          rem laudantium nihil quos sint, id voluptatem dolorum iure, ipsam
          labore qui. Recusandae, nulla obcaecati sit voluptas perspiciatis
          error. Expedita aut est pariatur commodi.
        </p>

        <p>
          Blanditiis cumque architecto, ad asperiores mollitia fugiat, facere
          non omnis corporis quia, dolorum totam laborum sint doloremque. Harum,
          autem quas dolores delectus placeat animi ducimus eveniet cum,
          recusandae, ab totam. Tenetur corporis est adipisci, velit, quam, qui
          culpa et delectus fugiat minus nisi. Itaque, sit maxime! Excepturi
          natus et labore harum amet error voluptatum quos soluta eius? Iusto,
          magni placeat. Blanditiis sapiente sunt modi labore asperiores
          nesciunt hic officiis ab enim. Temporibus consectetur, facere totam
          autem aliquid nulla fuga harum ipsa? Voluptas tempora delectus
          dolorum, doloremque sequi distinctio voluptate repudiandae!
        </p>

      </div>
    </div>
  );
}
