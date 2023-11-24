import Launch from './schema/Launch.ts'

export type GetLaunchesResponse = {
  launches: Launch[]
}

export type GetLaunchByIdResponse = {
  launch: Launch
}
