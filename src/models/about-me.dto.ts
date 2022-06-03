export class Resume {
  constructor(public driveUrl: string, public updatedAt: number) {}
}

export class Highlights {
  constructor(public highlights: string[]) {}
}

export class Contact {
  constructor(public email: string, public telegram: string) {}
}

export class Social {
  constructor(
    public twitter: string,
    public github: string,
    public reddit: string,
    public instagram: string,
    public linkedIn: string,
    public facebook: string,
  ) {}
}

export class Blogs {
  constructor(
    public personal: string,
    public medium: string,
    public devTo: string,
    public hashNode: string,
  ) {}
}

export class Qualification {
  constructor(
    public midSchoolDriveUrl: Certificate,
    public highSchoolDriveUrl: Certificate,
    public graduateDriveUrl: Certificate,
    public others: Certificate[],
  ) {}
}

export class Certificate {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public Organization: string,
    public certifiedDate: string,
    public certifiedUrl: string,
    public isDomainSpecific: string,
  ) {}
}

enum AwardType {
  Featured,
  Certificate,
  Trophy,
  Goodies,
  ShoutOut,
  Hackathon,
}

export class Awards {
  constructor(
    public id: string,
    public title: string,
    public organization: string,
    public description: string,
    public certificateUrl: string,
    public awardedDate: number,
    public awardType: AwardType,
  ) {}
}
