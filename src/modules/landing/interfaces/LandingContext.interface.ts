export interface LandingContextInterface {
  fetchData: () => Promise<{ data: string }>;
}