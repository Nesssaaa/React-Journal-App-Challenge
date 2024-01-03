import "./EntriesSection.css";
import Divider from "../Divider";
import Entry from "../Entry";
import Tabs from "../Tabs";
import Tab from "../Tab";
import Badge from "../Badge";
import React from "react";



export default function EntriesSection({entries}) {
  return (
    <section className="entries-section">
      <Tabs>
        <Tab active>
          All Entries <Badge isActive>3</Badge>
        </Tab>
        <Tab>
          Favorites <Badge>1</Badge>
        </Tab>
      </Tabs>
      <div className="entries-section__entries">
        {entries.map((entry, index) => (
           <React.Fragment key={entry.id}>
            {index !== 0 && <Divider />}
          <Entry key={entry.id} date={entry.date} motto={entry.motto} notes={entry.notes}/> 
          </React.Fragment>
          
        ))}
      </div>
    </section>
  );
}
