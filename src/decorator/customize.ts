
// metadata: hiểu đơn giản là 1 thông tin đính kèm (nhiều thông tin)
import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);