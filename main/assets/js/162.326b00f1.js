(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{725:function(e,t,o){"use strict";o.r(t);var a=o(1),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"roadmap-ibc-go"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#roadmap-ibc-go"}},[e._v("#")]),e._v(" Roadmap ibc-go")]),e._v(" "),o("p",[o("em",[e._v("Lastest update: April 6th, 2023")])]),e._v(" "),o("p",[e._v("This document endeavours to inform the wider IBC community about plans and priorities for work on ibc-go by the team at Interchain GmbH. It is intended to broadly inform all users of ibc-go, including developers and operators of IBC, relayer, chain and wallet applications.")]),e._v(" "),o("p",[e._v("This roadmap should be read as a high-level guide, rather than a commitment to schedules and deliverables. The degree of specificity is inversely proportional to the timeline. We will update this document periodically to reflect the status and plans. For the latest expected release timelines, please check "),o("a",{attrs:{href:"https://github.com/cosmos/ibc-go/wiki/Release-timeline",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"v7-1-0"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#v7-1-0"}},[e._v("#")]),e._v(" v7.1.0")]),e._v(" "),o("p",[e._v("Because it is so important to have an ibc-go release compatible with the latest Cosmos SDK release, a couple of features will take a little longer and be released in "),o("a",{attrs:{href:"https://github.com/cosmos/ibc-go/milestone/37",target:"_blank",rel:"noopener noreferrer"}},[e._v("v7.1.0"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"localhost-connection"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#localhost-connection"}},[e._v("#")]),e._v(" Localhost connection")]),e._v(" "),o("p",[e._v("This feature will add support for applications on a chain to communicate with applications on the same chain using the existing standard interface to communicate with applications on remote chains. This is a powerful UX improvement, particularly for those users interested in interacting with multiple smart contracts on a single chain through one interface.")]),e._v(" "),o("p",[e._v("For more details, see the new "),o("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/main/spec/client/ics-009-loopback-cilent",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS 09 specification"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("A special shout out to Strangelove Ventures and Polymer Labs for their substantial contribution on this feature.")]),e._v(" "),o("h2",{attrs:{id:"v7-2-0"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#v7-2-0"}},[e._v("#")]),e._v(" v7.2.0")]),e._v(" "),o("p",[e._v("Follow the progress with the "),o("a",{attrs:{href:"https://github.com/cosmos/ibc-go/milestone/37",target:"_blank",rel:"noopener noreferrer"}},[e._v("milestone"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"support-for-wasm-light-clients"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#support-for-wasm-light-clients"}},[e._v("#")]),e._v(" Support for Wasm light clients")]),e._v(" "),o("p",[e._v("We will add support for Wasm light clients. The first Wasm client developed with ibc-go/v7 02-client refactor and stored as Wasm bytecode will be the GRANDPA light client used for Cosmos <> Substrate IBC connections. This feature will be used also for a NEAR light client in the future.")]),e._v(" "),o("p",[e._v("This feature was developed by Composable and Strangelove but will be upstreamed into ibc-go.")]),e._v(" "),o("h2",{attrs:{id:"v8-0-0"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#v8-0-0"}},[e._v("#")]),e._v(" v8.0.0")]),e._v(" "),o("p",[e._v("Follow the progress with the "),o("a",{attrs:{href:"https://github.com/cosmos/ibc-go/milestone/38",target:"_blank",rel:"noopener noreferrer"}},[e._v("milestone"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"channel-upgradability"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#channel-upgradability"}},[e._v("#")]),e._v(" Channel upgradability")]),e._v(" "),o("p",[e._v("Channel upgradability will allow chains to renegotiate an existing channel to take advantage of new features without having to create a new channel, thus preserving all existing packet state processed on the channel. This feature will enable, for example, the adoption on existing channels of features like "),o("a",{attrs:{href:"https://github.com/cosmos/ibc/discussions/824",target:"_blank",rel:"noopener noreferrer"}},[e._v("path unwinding"),o("OutboundLink")],1),e._v(" or fee middlware.")]),e._v(" "),o("p",[e._v("Follow the progress with the "),o("a",{attrs:{href:"https://github.com/cosmos/ibc-go/milestone/29",target:"_blank",rel:"noopener noreferrer"}},[e._v("alpha milestone"),o("OutboundLink")],1),e._v(" or the "),o("a",{attrs:{href:"https://github.com/orgs/cosmos/projects/7/views/17",target:"_blank",rel:"noopener noreferrer"}},[e._v("project board"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("hr"),e._v(" "),o("p",[e._v("This roadmap is also available as a "),o("a",{attrs:{href:"https://github.com/orgs/cosmos/projects/7/views/25",target:"_blank",rel:"noopener noreferrer"}},[e._v("project board"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("For the latest expected release timelines, please check "),o("a",{attrs:{href:"https://github.com/cosmos/ibc-go/wiki/Release-timeline",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("For the latest information on the progress of the work or the decisions made that might influence the roadmap, please follow the "),o("a",{attrs:{href:"https://github.com/cosmos/ibc-go/discussions/categories/announcements",target:"_blank",rel:"noopener noreferrer"}},[e._v("Annoucements"),o("OutboundLink")],1),e._v(" category in the Discussions tab of the repository.")]),e._v(" "),o("hr"),e._v(" "),o("p",[o("strong",[e._v("Note")]),e._v(": release version numbers may be subject to change.")])])}),[],!1,null,null,null);t.default=r.exports}}]);