import { render, screen } from "@testing-library/react";
import { Thumbnail } from "./Thumbnail";


// TODO: #2 spike, review testing-library/react new features

test('renders learn react link', () => {
    render(<Thumbnail title={"title1"} description={"description1"} />);
    const title = screen.getByText(/title1/);
    const description = screen.getByText(/description1/);
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
  