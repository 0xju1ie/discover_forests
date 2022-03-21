import ForestDetails from '../ForestDetails';
import ReactDOM from 'react-dom';


const forestList = {
  name: "forest1",
  country: "Belgium",
  longitude: 4.469936,
  latitude: 50.503887,
  forest_type: "conservation",
  area_covered: 689300,
  current_carbon_stored: 600000,
  delta_carbon_stored: 1000.9,
  long_description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
  brief_description: "Le Lorem Ipsum est simplement du faux texte employé."
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  console.log(ReactDOM.render(<ForestDetails forest={forestList} />, div));
});