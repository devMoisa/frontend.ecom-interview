import React from "react";

type LogoProps = {
  fontSize?: number;
  variant?: "short" | "long";
  oneColor?: string;
};

export const Logo = ({
  fontSize = 64,
  variant = "short",
  oneColor,
}: LogoProps) => {
  const color = (defaultColor: string) => oneColor ?? defaultColor;

  const containerStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "baseline",
    fontFamily: '"Arial", "Helvetica Neue", sans-serif',
    fontWeight: 800,
    whiteSpace: "nowrap",
    userSelect: "none",
  };

  const mainStyle: React.CSSProperties = {
    fontSize,
    fontWeight: 800,
    lineHeight: 1,
    display: "inline-block",
  };

  if (variant === "long") {
    return (
      <span style={containerStyle}>
        <span style={{ ...mainStyle, color: color("#E61C29") }}>A</span>
        <span style={{ ...mainStyle, color: color("#E61C29") }}>M</span>
        <span style={{ ...mainStyle, color: color("#E61C29") }}>A</span>
        <span style={{ ...mainStyle, color: color("#E61C29") }}>Z</span>

        <span style={{ ...mainStyle, color: color("#1468FB") }}>G</span>
        <span style={{ ...mainStyle, color: color("#1468FB") }}>O</span>
        <span style={{ ...mainStyle, color: color("#1468FB") }}>O</span>

        <span style={{ ...mainStyle, color: color("#FFBF09") }}>N</span>
        <span style={{ ...mainStyle, color: color("#FFBF09") }}>E</span>
        <span style={{ ...mainStyle, color: color("#FFBF09") }}>T</span>

        <span style={{ ...mainStyle, color: color("#000000") }}>F</span>
        <span style={{ ...mainStyle, color: color("#000000") }}>P</span>
        <span style={{ ...mainStyle, color: color("#000000") }}>M</span>
        <span style={{ ...mainStyle, color: color("#000000") }}>O</span>
        <span style={{ ...mainStyle, color: color("#000000") }}>R</span>
        <span style={{ ...mainStyle, color: color("#000000") }}>G</span>
        <span style={{ ...mainStyle, color: color("#000000") }}>A</span>
        <span style={{ ...mainStyle, color: color("#000000") }}>N</span>

        <span style={{ ...mainStyle, color: color("#E61C29") }}>B</span>
        <span style={{ ...mainStyle, color: color("#1468FB") }}>A</span>
        <span style={{ ...mainStyle, color: color("#FFBF09") }}>Y</span>
      </span>
    );
  }

  return (
    <span style={containerStyle}>
      <span
        style={{
          display: "inline-flex",
          alignItems: "baseline",
        }}
      >
        <span
          style={{
            ...mainStyle,
            color: color("#E61C29"),
          }}
        >
          A
        </span>

        <span
          style={{
            ...mainStyle,
            color: color("#1468FB"),
            marginLeft: "-0.1em",
            transform: "translateY(-0.01em)",
          }}
        >
          G
        </span>

        <span
          style={{
            ...mainStyle,
            color: color("#FFBF09"),
            marginLeft: "-0.12em",
            transform: "translateY(-0.015em)",
          }}
        >
          N
        </span>

        <span
          style={{
            ...mainStyle,
            color: color("#66C319"),
            marginLeft: "-0.11em",
            transform: "translateY(-0.005em)",
          }}
        >
          P
        </span>

        <span
          style={{
            ...mainStyle,
            color: color("#7546BF"),
            marginLeft: "-0.13em",
            transform: "translateY(-0.015em)",
          }}
        >
          M
        </span>
      </span>

      <span
        style={{
          display: "inline-flex",
          alignItems: "baseline",
          marginLeft: "0.04em",
          fontSize: fontSize * 0.7,
          lineHeight: 1,
          fontWeight: 800,
        }}
      >
        <span
          style={{
            color: color("#E61C29"),
          }}
        >
          B
        </span>

        <span
          style={{
            color: color("#1468FB"),
            marginLeft: "-0.06em",
          }}
        >
          a
        </span>

        <span
          style={{
            color: color("#FFBF09"),
            marginLeft: "-0.04em",
          }}
        >
          y
        </span>
      </span>
    </span>
  );
};
