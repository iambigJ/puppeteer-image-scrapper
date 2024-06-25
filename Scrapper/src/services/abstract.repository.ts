// generic.repository.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export  abstract class GenericRepository{
    constructor(protected readonly model) {}

    async create(dto): Promise<void> {
        try {
            const result = await this.model.create(dto);
            console.log('Created:', result);
        } catch (error) {
            console.error('Error creating entity:', error);
            // Handle error as needhhed
        }
    }

    async findAndUpdate(filter: object, update: object): Promise<any> {
        try {
            const options = {
                upsert: true,
                new: true,
                runValidators: true,
            };
            const result = await this.model.findOneAndUpdate(filter, update, options);
            console.log('Updated:', result);
        } catch (error) {
            console.error('Error finding/updating entity:', error);
            // Handle error as needed
        }
    }

    async findOne(filter: object): Promise<any> {
        try {
            const result = await this.model.findOne(filter);
            return result;
        } catch (error) {
            console.error('Error finding entity:', error);
            // Handle error as needed
            throw error; // Re-throw the error if you want to propagate it
        }
    }
}