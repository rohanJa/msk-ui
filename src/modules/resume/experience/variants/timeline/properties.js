import propertyTypes from 'msk-property-types'
import themes from 'msk-themes'

const properties = {
  theme: {
    name: 'Theme',
    type: propertyTypes.THEME,
    value: themes.light.iceWhite,
    required: true
  },
  headlineText: {
    name: 'Headline text',
    type: propertyTypes.STRING,
    value: 'Work Experience',
    required: true
  },
  projects: {
    name: 'Experiences',
    type: propertyTypes.ARRAY,
    value: [
      {
        name: 'Experience',
        type: propertyTypes.OBJECT,
        required: true,
        value: {
          type: propertyTypes.OBJECT,
          company: {
            name: 'Company',
            type: propertyTypes.STRING,
            value: 'Company',
            required: true
          },
          designation: {
            name: 'Designation',
            type: propertyTypes.STRING,
            value: 'Designation',
            required: true
          },
          employementType: {
            name: 'employementType',
            type: propertyTypes.STRING,
            value: 'Full-Time/ Self-Employed/ Internship/ Other',
            required: true
          },
          description: {
            name: 'Description',
            type: propertyTypes.STRING_MULTI_LINE,
            value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            required: false
          },
          duration: {
            name: 'Duration',
            type: propertyTypes.STRING,
            value: '2019 - Present',
            required: false
          }
        }
      },
      {
        name: 'Expirence',
        type: propertyTypes.OBJECT,
        required: true,
        value: {
          type: propertyTypes.OBJECT,
          company: {
            name: 'Company',
            type: propertyTypes.STRING,
            value: 'MSK',
            required: true
          },
          designation: {
            name: 'Designation',
            type: propertyTypes.STRING,
            value: 'Full Stack Developer',
            required: true
          },
          employementType: {
            name: 'employementType',
            type: propertyTypes.STRING,
            value: 'Full-Time/ Self-Employed/ Internship/ Other',
            required: true
          },
          description: {
            name: 'Description',
            type: propertyTypes.STRING_MULTI_LINE,
            value: 'Visiting the third world to stop Tannhause to create time machine.',
            required: false
          },
          duration:{
            name: 'Duration',
            type: propertyTypes.STRING,
            value: '2017-2019',
            required: false
          }
        }
      },
      {
        name: 'Expirence',
        type: propertyTypes.OBJECT,
        required: true,
        value: {
          type: propertyTypes.OBJECT,
          company: {
            name: 'Company',
            type: propertyTypes.STRING,
            value: 'MSK',
            required: true
          },
          designation: {
            name: 'Designation',
            type: propertyTypes.STRING,
            value: 'Backend Developer',
            required: true
          },
          employementType: {
            name: 'employementType',
            type: propertyTypes.STRING,
            value: 'Half-Time',
            required: true
          },
          description: {
            name: 'Description',
            type: propertyTypes.STRING_MULTI_LINE,
            value: 'This section will contain the task that has completed during the duration.',
            required: false
          },
          duration:{
            name: 'Duration',
            type: propertyTypes.STRING,
            value: '2016-2017',
            required: false
          }
        } 
      }
    ]
  }
};

export default properties;