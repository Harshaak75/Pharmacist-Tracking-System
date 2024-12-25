// custom-types.d.ts
import { Prisma } from '@prisma/client';

declare module '@prisma/client' {
  interface ActivityCreateInput {
    image_data?: Buffer; // Add image_data if it's missing
  }
}
