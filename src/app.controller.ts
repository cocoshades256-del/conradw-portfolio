import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';
import { createReadStream } from 'fs';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('sections')
  getSections() {
    return this.appService.getSections();
  }
}
@Controller('files')
export class FileController {
  @Get('download-pdf')
  downloadPdf(@Res() res: Response) {
    const file = createReadStream(join(process.cwd(), 'public', 'static.pdf'));

    // Set the appropriate headers to force download
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="desired-filename.pdf"',
    });

    // Pipe the file stream to the response
    file.pipe(res);
  }
}