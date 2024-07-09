import { GlobalIcon } from "../../../global/GlobalIcon";

export const Description = () => {
  return (
    <div className="bg-slate-50 p-8 border border-gray-300 rounded-3xl mb-10">
      <h5 className="text-lg font-600 mb-5">Description</h5>
      <p className="text-sm mb-5">
        Quisque imperdiet dignissim enim dictum finibus. Sed consectetutr
        convallis enim eget laoreet. Aenean vitae nisl mollis, porta risus vel,
        dapibus lectus. Etiam ac suscipit eros, eget maximus Etiam sit amet ex
        pharetra, venenatis ante vehicula, gravida sapien. Fusce eleifend
        vulputate nibh, non cursus augue placerat pellentesque. Sed venenatis
        risus nec felis mollis, in pharetra urna euismod. Morbi aliquam ut
        turpis sit amet ultrices. Vestibulum mattis blandit nisl, et tristique
        elit scelerisque nec. Fusce eleifend laoreet dui eget aliquet. Ut rutrum
        risus et nunc pretium scelerisque.
      </p>
      <div className="flex justify-center gap-2 p-3 rounded bg-cape-light text-white max-w-52">
        <GlobalIcon type="document" />
        <p>Car-Brochure.Pdf</p>
      </div>
    </div>
  );
};
