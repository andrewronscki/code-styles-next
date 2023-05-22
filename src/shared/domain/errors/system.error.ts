export class SystemError extends Error {
  constructor(public readonly errorMessage: string) {
    super(errorMessage)
    this.name = this.constructor.name
  }
}
