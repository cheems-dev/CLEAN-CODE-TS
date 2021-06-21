interface Body {
  name?: string;
  model?: string;
  year?: number;
}
interface Response {
  statusCode: number;
  body: Error;
}

export default class RegisterVehicle {
  handle(_httpRequest: Body): Response {
    if (!_httpRequest.name) {
      return {
        statusCode: 400,
        body: new Error('Error in the name'),
      };
    }
    if (!_httpRequest.model) {
      return {
        statusCode: 400,
        body: new Error('Error in the model'),
      };
    }
    if (!_httpRequest.year) {
      return {
        statusCode: 400,
        body: new Error('Error in the year'),
      };
    }
    return {
      statusCode: 400,
      body: new Error('Error this property don`t exits'),
    };
  }
}
