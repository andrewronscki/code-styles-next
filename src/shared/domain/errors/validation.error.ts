export class ValidationError extends Error {
  constructor(public readonly param: string, public readonly errorMessage: string) {
    super(errorMessage)
    this.name = this.constructor.name
  }
}
