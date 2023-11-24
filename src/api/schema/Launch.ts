interface Launch {
  id: string
  links?: {
    flickr_images: string[]
  }
  mission_name?: string
  launch_date_utc?: number
  details?: string
}

export default Launch
