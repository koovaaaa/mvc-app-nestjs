import { Injectable } from '@nestjs/common';
import api from '../api';
const { writeFile, mkdir } = require('fs');

@Injectable()
export class RestApiService {
  async getDataFromRestAPI() {
    return await api('https://jsonplaceholder.typicode.com/posts', 'get');
  }

  async writeJsonToFile() {
    const data = await this.getDataFromRestAPI();
    mkdir('data', () => {});
    writeFile('data/data.json', JSON.stringify(data), () => {});
    writeFile('data/data.txt', JSON.stringify(data), () => {});
    return { message: 'File saved successfully!' };
  }
}
