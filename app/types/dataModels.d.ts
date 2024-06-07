import { Query } from "@nozbe/watermelondb"
import RecurringTxn from "../database/models/RecurringTxn"
import Transaction from "../database/models/Transaction"
import Notification from "../database/models/Notification"
import Budget from "../database/models/Budget"
import Tag from "../database/models/Tag"
import Category from "../database/models/Category"

export interface ITag {
    name: string
    transactions: Query<Transaction>
    recurringTxn: [RecurringTxn]
    owner: User
}

export interface IUser {
    email: string;
    username: string;
    baseCurrency: string;

    transactions: [Transaction]
    recurringTxn: [RecurringTxn]
    notifications: [Notification]
    budgets: [Budget]
    tags: [Tag]
    categories: [Category]

    createdAt: Date;
    updatedAt: Date;
}

export interface ITransaction {
    amt: number;
    qtn: number;
    brand: string;
    title: string;
    description: string;
    shop: string;
    address: string;
    lat: number;
    long: number;
    spentOn: Date;
    currency: string;
    exchangeRate: number;
  
    tags: Query<Tag>
    owner: User;
    category: Category;
    
    createdAt: Date;
    updatedAt: Date;
}

export interface IRecurringTxn {
    amt: string;
    intervalInSeconds: number;
    startAt: Date;
    endAt: Date;
    brand: string;
    title: string;
    description: string;
    currency: string;

    tags: [Tag];
    owner: User
    category: Category;

    createdAt: Date;
    updatedAt: Date;
}

export interface IBudget {
    amt: number;
    startDate: Date;
    endDate: Date;

    user: User;

    createdAt: Date;
    updatedAt: Date;
}

export interface ICategory {
    name: string;

    transactions: [Transaction]
    recurringTxn: [RecurringTxn]
    owner: User
}

export interface INotification {
    title: string;
    content: string;
    read: boolean;

    recipient: User;
    createdAt: Date;
}

export interface ITransactionTag {
    transaction: string;
    tag: string;
}

export interface FrequencyData {
    total?: string;
    repaymentPeriod?: string;
    installmentAmount?: string;
    execution?: string;
    interval?: string;
    times?: string;
}