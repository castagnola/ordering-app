import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order';
import { OrdersRepository } from './repository/orders.repository';

@Injectable()
export class OrdersService {
  constructor(private orderRepository: OrdersRepository) {}

  async createOrder(request: CreateOrderDto) {
    return this.orderRepository.create(request);
  }

  async getOrders() {
    return this.orderRepository.find({});
  }
}
