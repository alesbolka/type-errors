declare namespace UnitTests {
  interface MockRequest {
    foo: string;
  }
  interface MockResponse {
    json(data: any): void,
    jsonParams: any[],
  }

  export interface HandlerFactory {
    (overrides: { [key: string]: any }): { req: MockRequest, next: import('sinon').SinonSpy, res: MockResponse, handler: import('express').Handler };
  }
}