/**
 * Main App Router Interface
 */
export interface RouterInterface {
  key: number;
  name: string;
  path: string;
  exact: boolean;
  title: string;
  meta: any;
  component: any;
}
