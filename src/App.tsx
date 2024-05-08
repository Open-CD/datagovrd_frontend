import "./App.css";
import { MainLayout } from "./layouts";

function App() {
  return (
    <>
      <MainLayout>
        <div className="flex gap-x-4">
          <div>
            <h1 className="font-bold text-3xl">Lorem ipsum dolor sit amet</h1>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus
              gravida quis blandit turpis. Augue neque gravida in fermentum et
              sollicitudin ac orci. Et sollicitudin ac orci phasellus egestas.
              Elementum tempus egestas sed sed risus pretium quam vulputate.
              Interdum velit euismod in pellentesque massa placerat duis
              ultricies.
            </p>
            <p className="mt-4">
              Tincidunt vitae semper quis lectus nulla at volutpat diam. Gravida
              dictum fusce ut placerat. Erat velit scelerisque in dictum non.
              Tempus quam pellentesque nec nam aliquam sem et tortor consequat.
              Eu nisl nunc mi ipsum faucibus. Cras fermentum odio eu feugiat
              pretium nibh. Vel pharetra vel turpis nunc eget lorem dolor sed
              viverra. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus.
              Sed id semper risus in hendrerit gravida rutrum. Eget nulla
              facilisi etiam dignissim. Erat imperdiet sed euismod nisi. Risus
              in hendrerit gravida rutrum quisque non tellus orci ac.
            </p>
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default App;
