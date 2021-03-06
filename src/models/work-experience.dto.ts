export class WorkExperience {
  constructor(
    public fullTime: WorkDetails[],
    public consultant: WorkDetails[],
    public internships: WorkDetails[],
  ) {}
}

export class WorkDetails {
  constructor(
    public designation: string,
    public employmentStart: number,
    public employmentEnd: number,
    public companyDetails: Company,
    public responsibilities: string[],
    public projects: CompanyProject[],
    public learnings: string[],
    public impacts: string[],
    public awards: CompanyAward[],
    public references: CollegeProfile[],
    public testimonials: CompanyTestimonials[],
    public isCurrentCompany: boolean,
  ) {}
}

export class Company {
  constructor(
    public name: string,
    public location: string,
    public iconUrl: string,
    public about: string,
  ) {}
}

export class CompanyProject {
  constructor(
    public name: string,
    public about: string,
    public projectDemoUrl: string,
    public screenShotsUrls: string[],
    public teamProfile: CollegeProfile[],
  ) {}
}

export class CompanyTestimonials {
  constructor(public message: string, public profile: CollegeProfile) {}
}

export class CollegeProfile {
  constructor(
    public name: string,
    public avatarUrl: string,
    public profileUrl: string,
    public designation: string,
  ) {}
}

export class CompanyAward {
  constructor(
    public name: string,
    public awardProofUrl: string,
    public awardReason: string[],
  ) {}
}
