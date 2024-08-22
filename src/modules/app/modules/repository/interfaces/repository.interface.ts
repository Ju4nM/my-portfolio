
export interface RepositoryInterface {
  uuid: string;
  id: number;
  name: string;
  summary: string;
  description: string;
  language: string;
  html_url: string;
  created_at: Date;
  isVisible: boolean;
}