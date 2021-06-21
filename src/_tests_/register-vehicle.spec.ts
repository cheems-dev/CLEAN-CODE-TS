import RegisterVehicle from '../controllers/registerVehicle';

/* eslint-disable no-undef */
describe('RegisterVehicle', () => {
  // test('Is the does not exist return 400', () => {
  //   const sut = new RegisterVehicle();
  //   const httpRequest = {
  //     name: 'Nissan',
  //     model: 'DXT',
  //     year: 2020,
  //   };

  //   const httpResponse = sut.handle(httpRequest);
  //   expect(httpResponse.statusCode).toBe(400);
  //   expect(httpResponse.body).toEqual(new Error('Error in the name'));
  // });

  test('Is the name does not exist return 400', () => {
    const sut = new RegisterVehicle();
    const httpRequest = {
      // name: 'Nissan',
      model: 'DXT',
      year: 2020,
    };

    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error('Error in the name'));
  });

  test('Is the model does not exist return 400', () => {
    const sut = new RegisterVehicle();
    const httpRequest = {
      name: 'Nissan',
      // model: 'DXT',
      year: 2020,
    };

    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error('Error in the model'));
  });

  test('Is the year does not exist return 400', () => {
    const sut = new RegisterVehicle();
    const httpRequest = {
      name: 'Nissan',
      model: 'DXT',
      // year: 2020,
    };

    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error('Error in the year'));
  });

  test('Is the property does not exist return 400', () => {
    const sut = new RegisterVehicle();
    const httpRequest = {
      name: 'Nissan',
      model: 'DXT',
      year: 2020,
      raaa: true,
    };

    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error('Error this property don`t exits'));
  });
});
