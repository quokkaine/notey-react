'use client'
import Layout from '@/components/Layout'
import React, { useState } from "react";
import ReactMde from "react-mde";
import { TextState, TextApi, TextAreaTextApi } from "react-mde/lib/definitions/types";
import { TextAreaCommand } from "react-mde";
import { TextAreaRef } from "react-mde/lib/definitions/types";
import 'react-mde/lib/styles/css/react-mde-all.css';
import * as Showdown from "showdown";

function loadSuggestions(text: string) {
    return new Promise<Showdown.Suggestion[]>((accept, reject) => {
      setTimeout(() => {
        const suggestions: Showdown.Suggestion[] = [
          {
            preview: "Andre",
            value: "@andre"
          },
          {
            preview: "Angela",
            value: "@angela"
          },
          {
            preview: "David",
            value: "@david"
          },
          {
            preview: "Louise",
            value: "@louise"
          }
        ].filter(i => i.preview.toLowerCase().includes(text.toLowerCase()));
        accept(suggestions);
      }, 250);
    });
  }
  
  const getMdeStateFromDraftState = (draftEditorState: Showdown.DraftEditorState) => {
    const showdown = new Showdown.Converter({
      tables: true,
      simplifiedAutoLink: true,
      strikethrough: true,
      tasklists: true
    });
    return {
      text: draftEditorState.text,
      selection: draftEditorState.selection,
      html: showdown.makeHtml(draftEditorState.text)
    };
  };
  
  const emptyMdeState = getMdeStateFromDraftState({
    text: "**Hello world!**",
    selection: {
      start: 0,
      end: 0
    }
  });
  
  function App() {
    const [value, setValue] = useState(emptyMdeState);
    const [selectedTab, setSelectedTab] = React.useState<"write" | "preview">("write");
  
    return (
      <div className="container">
        <ReactMde
          value={value}
          onChange={setValue}
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
          generateMarkdownPreview={markdown =>
            Promise.resolve(<Showdown.Converter />.makeHtml(markdown))
          }
          loadSuggestions={loadSuggestions}
          childProps={{
            writeButton: {
              tabIndex: -1
            }
          }}
          commands={[
            // commands passed to react-mde
          ]}
        />
      </div>
    );
  }
  
  export default App;

export default function Home() {
    return <Layout>test</Layout>
}
