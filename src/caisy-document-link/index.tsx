import React from 'react'

const Asset = ({ src, description }) => {
  return (
    <>
      {src && (
        <img
          loading="lazy"
          src={`${src}?w=1920&h=960`}
          srcSet={`${src}?w=3840&h=1920 1920w, ${src}?w=1920&h=960 1280w, ${src}?w=1280&h=640 640w`}
          alt={description ?? ""}
        />
      )}
    </>
  )
}

export const DocumentLink = ({ connections, node, children }) => {
  return (
    <>
      {connections?.map(
        (connection) =>
        connection?.__typename == "Asset" &&
          node?.attrs?.documentId == connection.id && <Asset key={connection.id} {...connection} />,
      )}
      {children}
    </>
  )
}

export default DocumentLink
