export interface MovieDataResponse {
  poster_path: string;
  video: boolean;
  vote_average: number;
  overview: string;
  id: number;
  vote_count: number;
  adult: boolean;
  backdrop_path: string;
  title: string;
  genre_ids: number[];
  release_date: string;
  original_language: string;
  original_title: string;
  popularity: number;
  media_type: string;
  duration: number;
}
