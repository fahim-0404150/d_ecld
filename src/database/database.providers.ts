import { DataSource } from "typeorm";

export const databaseProviders = [
  {
    provide: DataSource,  // add the datasource as a provider
    inject: [],
    useFactory: async () => {
      // using the factory fnction to create the datasource instance
      try {
        const dataSource = new DataSource({
          type: "postgres",
          host: "localhost",
          port: 5432,
          username: "postgres",
          password: "Porsce356",
          database: "test_euclido",
          entities: [
            __dirname + "/../**/*.entity{.ts,.js}",
          ],
          synchronize: true, // For production db this valuse must ber false
        });
        await dataSource.initialize();  // initialize the data source
        console.log("Database connected successfully");
        return dataSource;
      } catch (error) {
        console.log("Error connecting to database");
        throw error;
      }
    },
  },
];
