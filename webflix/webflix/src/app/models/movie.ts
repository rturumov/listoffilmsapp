export interface Genre {
    id: number;
    name: string;
  }

  export interface Release {
    id: number;
    release: number;  // Assuming 'release' is a year
  }

  export interface Movie {
    id: number;
    name: string;
    genre: Genre[];
    rating: number;
    description: string;
    release: Release;
    image: string;
  }

export interface Anime {
  id: number;
  name: string;
  genre: Genre[];
  rating: number;
  description: string;
  release: Release;
  image: string;
}

export interface Cartoons {
  id: number;
  name: string;
  genre: Genre[];
  rating: number;
  description: string;
  release: Release;
  image: string;
}

export interface Series {
  id: number;
  name: string;
  genre: Genre[];
  rating: number;
  description: string;
  release: Release;
  image: string;
}


