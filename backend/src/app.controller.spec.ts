import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  // CORREGIDO: Volver a usar el tipo AppController
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    // CORREGIDO: Obtener la instancia de AppController
    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      // Este método existe en AppController
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
