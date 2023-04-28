import { Component } from "react";
import axios from "axios";

export default class Tv extends Component {
  state = { tv: [] };

  async componentDidMount() {
    let x = await axios.get(
      "https://api.themoviedb.org/3/trending/tv/day?api_key=52bbcddeda849047525b51d6f8a12361"
    );
    this.setState({ tv: x.data.results });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="brd w-50"></div>
              <h3>
                Trending
                <br />
                TV Shows
                <br />
                To Watch
              </h3>
              <p className="pc">Most Watched Movies by Days</p>
              <div className="brd w-100"></div>
            </div>

            {this.state.tv.map((value, index) => {
              return (
                <div key={index} className="col-md-3">
                  <img
                    src={
                      "https://image.tmdb.org/t/p/original" + value.poster_path
                    }
                    className="w-100"
                  />
                  <p className="text-center">
                    {value.title}
                    {value.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
