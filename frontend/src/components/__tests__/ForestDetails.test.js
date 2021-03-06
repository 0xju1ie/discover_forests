import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ForestDetails from "../ForestDetails";
import ForestCard from "../ForestCard";

afterEach(cleanup);

const forestList = {
  name: "forest1",
  country: "Belgium",
  longitude: 4.469936,
  latitude: 50.503887,
  forest_type: "conservation",
  area_covered: 689300,
  current_carbon_stored: 600000,
  delta_carbon_stored: 1000.9,
  long_description:
    "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
  brief_description: "Le Lorem Ipsum est simplement du faux texte employé.",
};

test("renders without crashing", () => {
  const div = document.createElement("div");
  render(<ForestDetails isDetailsVisible="true" forest={forestList} />, div);
  // screen.debug()
});

test("renders correctly when a ForestCard is clicked", () => {
  render(<ForestCard forest={forestList} />);
  const forestCardDescription = screen.getByText(
    /^Le Lorem Ipsum est simplement du faux texte employé./i
  );
  userEvent.click(forestCardDescription);
  const forestDetails = screen.getByTestId("forestDetails");
  const forestLatitude = screen.getByText(/50.503887/i);
  expect(forestDetails).toBeInTheDocument();
  expect(forestLatitude).toBeInTheDocument();
});

test("matches snapshot", () => {
  const { container } = render(
    <ForestDetails isDetailsVisible="true" forest={forestList} />
  );
  expect({ container: document.body }).toMatchSnapshot();
});
