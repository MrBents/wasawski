export class Image {
  constructor(
      public description: string,
      public _id?: number,
      public updatedAt?: Date,
      public createdAt?: Date,
      public lastUpdatedBy?: string,
  ) { }
}
