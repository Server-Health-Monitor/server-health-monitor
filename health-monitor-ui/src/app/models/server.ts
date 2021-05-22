export interface Servers {
  servers?: (ServersEntity)[] | null;
}
export interface ServersEntity {
  serverId: number;
  group: Group;
  displayName: string;
  uri: string;
  application: Application;
  proxy: Proxy;
  status: Status;
}
export interface Group {
  groupID: number;
  name: string;
}
export interface Application {
  applicationID: number;
  name: string;
}
export interface Proxy {
  proxyID: number;
  host: string;
  port: number;
}
export interface Status {
  serverId: number;
  statusName?: null;
}
