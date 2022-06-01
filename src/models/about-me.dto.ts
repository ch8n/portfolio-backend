class Resume {
  constructor(public driveUrl: string, public updatedAt: number) {}
}

class Highlights {
  constructor(public highlights: string[]) {}
}

class Contact {
  constructor(public email: string, public telegram: string) {}
}

class Social {
  constructor(
    public twitter: string,
    public github: string,
    public reddit: string,
    public instagram: string,
    public linkedIn: string,
    public facebook: string,
  ) {}
}

class Blogs {
  constructor(
    public personal: string,
    public medium: string,
    public devTo: string,
    public hashNode: string,
  ) {}
}

class Qualification {
  constructor(
    public midSchoolDriveUrl: Certificate,
    public highSchoolDriveUrl: Certificate,
    public graduateDriveUrl: Certificate,
    public others: Certificate[],
  ) {}
}

class Certificate {
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

class Awards {
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
