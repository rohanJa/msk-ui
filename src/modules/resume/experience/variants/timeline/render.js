import React from 'react';
import {
  Timeline, 
  TimelineItem, 
  TimelineSeparator, 
  TimelineConnector, 
  TimelineContent, 
  TimelineOppositeContent, 
  TimelineDot,
} from '@material-ui/lab';
import WorkIcon from '@material-ui/icons/Work';
import{
 Paper,
 Typography } from '@material-ui/core/Typography';

const useStyles = (theme) => ({
  root: {
    backgroundColor: 'white',
    padding: 20
  },
  headlineText: {
    margin: 0
  },
  projectItem: {
    margin: 0
  },
  timelineItemAlign: {
    flex: 'inherit'
  },
  timelineContent: {
    padding: '6px 16px'
  },
  timelineContentHeader: {
    margin: 0,
    fontSize: '20px'
  },
  timelineContentCompany: {
    margin: '10px 0',
    fontSize: '14px'
  },
  timelineContentDescription: {
    margin: '10px 0',
    fontSize: '12px'
  }
});

const TimeLine = ({ theme, headlineText, projects }) => {
  const styles = useStyles();
  function renderProject(projectDetails) {
    return (
      <TimelineItem>
        <TimelineOppositeContent 
          style={{ flex: 1 }}
        >
          <Typography
            style={{ 
                    textAlign: 'left',
                    fontWeight: 'bold'
                  }}
            variant="subtitle2"
            color="inherit"
          >
            {projectDetails.duration.value}
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator 
          style={{ flex: 0 }}
        >
          <TimelineDot 
            color="primary"
          >
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent 
          style={{ flex: 5 }}
        >
          <Paper 
            elevation={4} 
            style={styles.timelineContent}
          >
            <Typography 
              style={{ ...styles.timelineContentHeader, fontWeight: 'bold' }} 
              component="h1"
            >
              {projectDetails.designation.value}
            </Typography>
            <Typography
              style={styles.timelineContentCompany}
              component="h3"
            >
              {projectDetails.company.value} |{" "} {projectDetails.employementType.value}
            </Typography>
            <Typography 
              style={styles.timelineContentDescription}
            >
              {projectDetails.description.value}
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    );
  }

  return (
    <Timeline
      style={{
        ...styles.root,
        backgroundColor: theme.value.color,
        color: theme.value.contrast
      }}
    >
      <h1 style={styles.headlineText}>{headlineText.value}</h1>
      <hr />
      
      {/* 
          Object 'projects' will map through all the object 
          defiend under value field in properties.js and renderProject() function
          will render all the data defined in timeline format. 
      */}

      {projects.value.map((projectDetails, id) => {
        return (
          <div key={id}>
            <br />
            {renderProject(projectDetails.value)}
          </div>
        );
      })}
    </Timeline>
  );
};

export default TimeLine;
