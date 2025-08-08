import { useParams } from "react-router-dom";
import { useProductStore } from "../stores/UseProductStore.js";

const DescriptionsCard = () => {
  const { id } = useParams();
  const products = useProductStore((state) => state.products);
  const product = products.filter((product) => product.id === Number(id));
  console.log(product);
  return (
    <div className="border relative p-4 px-4 rounded-xl border-zinc-300">
      <div className="flex justify-between  items-center border-b border-zinc-300 ">
        <span className="border-b-2 pb-3 w-100 border-teal-400 text-center">
          Description
        </span>
      </div>
      <div className="flex flex-col gap-8 py-8">
        <p className="font-medium">{product.description}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vitae ex
          cupiditate dolorem. Necessitatibus, aspernatur deleniti, harum iusto
          laudantium architecto quia, nulla nam atque voluptates quae magni.
          Ratione saepe earum neque quidem illo sunt error odit, dolorum,
          quibusdam quas atque consequatur sit nostrum pariatur! Excepturi
          consectetur quisquam saepe rerum assumenda perferendis molestiae
          nostrum ut? Explicabo facilis eaque, harum mollitia accusantium
          voluptatum ex assumenda placeat eligendi vero blanditiis debitis
          voluptas fugiat facere, necessitatibus veritatis esse, odit
          perferendis dolorum! Porro itaque dolorum nemo harum molestiae
          voluptatum quibusdam cumque neque et sit eos tempore eius facere
          cupiditate, repellat non debitis necessitatibus id nulla ullam sequi
          omnis ea deleniti. Ducs vero sint esse temporibus. Eum quo in expedita
          facere laborum aspernatur facilis, nulla ipsum neque labore reiciendis
          incidunt eos. Non doloremque maxime excepturi est animi.
        </p>
      </div>
    </div>
  );
};

export default DescriptionsCard;
