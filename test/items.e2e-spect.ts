import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { ItemsModule } from '../src/items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { Item } from '../src/items/interfaces/item.interface';

describe('ItemsController (e2e)', () => {
    let app;
  
    beforeAll(async () => {
      const moduleFixture: TestingModule = await Test.createTestingModule({
        imports: [
          ItemsModule,
          MongooseModule.forRoot('mongodb://localhost/nestgraphqltesting'),
          GraphQLModule.forRoot({
            autoSchemaFile: 'schema.gql',
          }),
        ],
      }).compile();
  
      app = moduleFixture.createNestApplication();
      await app.init();
    });
  
    afterAll(async () => {
      await app.close();
    });
    
});
