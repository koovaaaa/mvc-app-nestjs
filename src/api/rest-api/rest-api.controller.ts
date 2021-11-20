import { Controller, Get, Render } from '@nestjs/common';
import { RestApiService } from './rest-api.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Rest API')
@Controller('rest-api')
export class RestApiController {
  constructor(private readonly restApiService: RestApiService) {}

  @Get()
  @Render('data')
  async getData() {
    return { data: await this.restApiService.getDataFromRestAPI() };
  }

  @Get('save-data')
  @Render('save-data')
  async saveDataToFile() {
    return this.restApiService.writeJsonToFile();
  }
}
