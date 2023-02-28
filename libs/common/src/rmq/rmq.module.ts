import { Module } from '@nestjs/common';

@Module({
  providers: [RmqModule],
  exports: [RmqModule],
})
export class RmqModule {}
