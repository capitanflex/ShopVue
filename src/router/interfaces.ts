export interface IRoute {
    id: number,
    path: string,
    name: string,
    component: () => Promise<Object>,
}